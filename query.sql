use P_REPFORDJB
--User: gdj_viewer2024
--Pass: qylmiz6Ol3oD57CSl7Ba

--Exec udpGetHxHV2 'FORD-FI-BOX-PACK(CENTRAL)'
--exec udpGetHxHPackFord
--exec udpGetHxH 'FORD-FI-BOX-PACK(CENTRAL)'

	declare @StationName varchar(100)
	set @StationName = 'FORD-FI-BOX-PACK(CENTRAL)'
	declare @fechita nvarchar(50)
	set @fechita = '2024-10-23'
	declare @endtime datetime


	Declare @StartTime datetime
	Declare @StartID int
	Declare @Contador int =  1
	Declare @TableQty int
	Declare @Query varchar(max)
	--Set @StartTime = Convert(varchar,Convert(Date,Dateadd(Day,+1,GetDate()))) + ' 22:59:59.999'
	--Set @StartTime = Convert(varchar,Convert(Date,@fechita)) + ' 06:59:59.999'
	Set @StartTime = Convert(varchar,Convert(Date,@fechita)) + ' 06:59:59.999'
	--Set @endtime= Convert(varchar,Convert(Date,Dateadd(Day,1,@fechita))) + ' 06:59:59.999'
	--print @endtime
	Declare @Qstation varchar(100)
	Declare @QEnterTime varchar(100)
	Declare @QQty int
	Declare @QIspass int

	Select Top 1 
		@StartID = t.ID
	From ffTest as t
	Where t.CreationTime >= @StartTime
	--Order by t.ID 

	Create table #RelacionNaves (
		Nave int,
		Linea int,
		Familia varchar(100),
		UPH int
	)
	--Select * From luPartFamily order by [Name]
	Insert into #RelacionNaves values 
	(4,1,'ECG',178),
	(4,2,'ECG',178),

	(4,3,'BMW',159),
	(4,4,'BMW',159),
	(4,5,'BMW',159),

	(4,6,'FORD SYNC 4.0',178),
	(4,7,'FORD SYNC 4.0',178),

	(4,8,'SYNC3',83),
	(4,9,'SYNC3',83),

	(4,10,'FORD SYNC 4.0',178),
	(4,11,'FORD SYNC 4.0',178),
	(4,12,'FORD SYNC 4.0',178),
	(4,13,'FORD SYNC 4.0',178),

	(2,1,'FORD TCU',178),
	(2,2,'FORD TCU',178),

	(2,3,'FORD TCU2',185),
	(2,4,'FORD TCU2',185),

	(2,5,'PHOENIX',116),
	(2,6,'PHOENIX',116)

	Delete udtPackHxh Where CreationTime < @StartTime

	Select 
		t.UnitID as UnitID,
		s.[Description] as StationName,
		Convert(datetime,CreationTime) as EnterTime,
		Format(Convert(Time,CreationTime),'hh') as Hora,
		t.IsPass as Ispass,
		re.UPH as UPH
	Into #Temporal
	From ffTest as t
		join ffStation as s on s.ID = t.StationID
		--	and s.[Description] like '%Pack%'
			and s.[Description] = @StationName
		join ffPart as p on p.ID = t.PartID
		join luPartFamily as pf on pf.ID = p.PartFamilyID
		join #RelacionNaves as re on pf.[Name] like '%' + re.Familia + '%'
	Where 
		t.ID >= @StartID
		--t.CreationTime > @StartTime
		--and re.Linea = @Linea
		--and re.Nave = @Nave


	Select 
		t.StationName as StatinoName,
		Convert(Date,t.EnterTime) as EnterTime,
		t.Hora as [Hour],
		t.Ispass as IsPass,
		t.UPH as UPH,
		Count(t.Ispass) as IsPassQty,
		Count(t.StationName) as Qty
	Into #Temporal2
	From #Temporal as t
	Group by t.StationName, t.EnterTime, t.Hora, t.Ispass, t.UPH
	Order by t.StationName, t.EnterTime, t.Hora, t.Ispass, t.UPH

	Select 
		 t2.StatinoName as StationName,
		t2.EnterTime as EnterTime,
		t2.[Hour] as [Hour],
		t2.UPH as UPH
	Into #Temporal3
	From #Temporal2 as t2
	Group by t2.StatinoName, t2.EnterTime, t2.[Hour], t2.Ispass, t2.UPH
	Order by t2.StatinoName, t2.EnterTime, t2.[Hour], t2.Ispass, t2.UPH

	Select Distinct
		t3.StationName as StationName,
		t3.EnterTime as EnterTime,
		t3.[Hour] as [Hour],
		(Select Sum(t2.uph) From #Temporal2 as t2 Where t2.StatinoName = t3.stationName and t2.[Hour] = t3.[Hour]) /(Select Count(t2.uph) From #Temporal2 as t2 Where t2.StatinoName = t3.StationName and t2.[Hour] = t3.[Hour]  ) as UPH,
		(Select Count(*) From #Temporal2 as t2 Where t2.StatinoName = t3.StationName and t2.[Hour] = t3.[Hour] and t2.IsPass = 1 ) as Pass,
		(Select Count(*) From #Temporal2 as t2 Where t2.StatinoName = t3.StationName and t2.[Hour] = t3.[Hour] and t2.IsPass = 0 ) as Fail
	Into #Temporal4
	From #Temporal3 as t3


	IF (SELECT COUNT(*) FROM #Temporal4) = 0
		SELECT '[{}]' AS Result
	ELSE

	 --select (  
	 Select top 24
		t4.StationName as StationName,
		t4.EnterTime as EnterTime,
		t4.[Hour] as [Hour],
		t4.UPH as UPH,
		
		round(convert(float, isnull(t4.Pass,0))/ convert(float, (isnull(t4.Pass, 0) +  isnull(t4.Fail, 0))),4) * 100 as Yield,
		round(convert(float,(t4.Pass + t4.Fail))/Convert(float,t4.UPH),4) * 100 as Eficiencia,
		t4.Pass as Pass,
		t4.Fail as Fail
		
	From #Temporal4 as t4 
	--for json path) as json
	--where
	--t4.Hour = '07'
	--t4.EnterTime =  @endtime
	--'2024-10-23'



	Drop table #Temporal
	Drop table #Temporal2
	Drop table #Temporal3
	Drop table #Temporal4
	Drop table #RelacionNaves
