nombre = input('cual es tu nombre ')
print('Hola ' + nombre )

edad = int(input('cuantos años tienes '))
pasar = edad >= 12
Hijo = input('eres hijo del dueño ')
HijoDueño = Hijo == 'si'
entrar = pasar or HijoDueño

if entrar:
    print('puedes entrar a la sorpresa')
else:
    print('no puedesa entrar a la sorpresa') 