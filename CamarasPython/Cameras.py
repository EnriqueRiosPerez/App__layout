import cv2
import pyzbar.pyzbar as pyzbar
from PySide2.QtGui import(QImage,QPixmap)
cap = cv2.VideoCapture(0,cv2.CAP_DSHOW)


while True:
    _, frame = cap.read()
    # decodedObjects = pyzbar.decode(frame)  
    # for obj in decodedObjects:
    #     (x, y, w, h) = obj.rect  
    #     cv2.rectangle(frame, (x, y), (x + w, y + h), (0, 255, 0), 2)   
    #     barcodeData = obj.data.decode("utf-8")
    cv2.imshow('webCam',frame)
    # frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
    # frame = cv2.flip(frame, 1)
    # imagen = QImage(frame,frame.shape[1], frame.shape[0], frame.strides[0], QImage.Format_RGB888)
    key = cv2.waitKey(3) & 0xff
    if key == False:
        break
    cap.release()
