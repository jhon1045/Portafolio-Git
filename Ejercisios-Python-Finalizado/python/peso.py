

peso = int(input('ingresa tu peso en KG: '))
alturaa = float(input('ingresa tu peso en M: '))
altura = alturaa/ 100
imc = peso / altura * altura

if imc <= 20 :
    print('Estas desnutrido ')
if imc <= 20 and imc < 26 : 
    print('estas normal pinche gordo')
if imc <= 20 and imc < 30 :
    print('Has ejercicio gordo obeso')
if imc < 30 :
    print('esta sobresaturado')