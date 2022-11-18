from turtle import with
import speech_recognition as sr
import pyttsx3

listener = sr.Recognizer()
engine = pyttsx3.init()


engine.say ("buenos dias mauricio")
engine.runAndWait()

voices = engine.getProperty('voices')
engine.setProperty('voice', voices[4].id)

# for voice in voices:
#   print(voices)

try:
  with sr.Microphone() as sourse:
      print("Escuchando...")
      voice = listener.listen(sourse)
      rec = listener.recognize_google(voice)
      print(rec)
except:
        pass