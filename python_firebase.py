from firebase import firebase
import time
import random
import os
import subprocess

#firebase projenizdeki url
App_url = 'https://python-reactnative.firebaseio.com/'
i=1
# firebase connectionstringi
firebase = firebase.FirebaseApplication(App_url)
while(True):
    try:
        soru=input("Send Message for React Native: ")
        print("Sending...")
        #sayi değişkenine rastgele ürettiğimiz değişkeni atıyoruz
        #sayi=random.randint(1000,100000)
        #eğer uygulamamıza rastgele sayı aktarmak istersen result değişkeni
        #içerisindeki "soru" değişkeni yerine "sayi" yazın.

        #Firebase'de Rastgele/sayi=value hiyerarşisine sahip bir alan oluşturdum.
        result = firebase.put('/Rastgele', 'sayi', soru)

        #Alttaki 3 alan sadece görüntü amaçlıdır.
        print("Successfull.")
        time.sleep(0.5)
        subprocess.call("cls", shell=True)

        #Ürettiğimiz rastgele sayıları ekranda görmek istersek alttaki 2 alanın yorum satırı işaretini kaldırın.
        #print(i,".sayi:",sayi)
        #i=i+1
    except:
        print("ERROR: Firebase-Python")
        
    
