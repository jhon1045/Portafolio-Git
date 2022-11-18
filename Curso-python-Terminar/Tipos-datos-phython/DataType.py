# datos string || en cadena de texto
from xmlrpc.client import boolean


print("HelloWord")
print('HelloWord')
# tambien se pueden con triple comillas simples y dobles
print("""HelloWord""")
print('''HelloWord''')
print('''con''' + '''catena''' + '''cion''')
print(type('''HelloWoed'''))

# datos numericos || int(enteros || intenger)
print(50)
print(70)
print(65 + 88 + 20) # lo esta sumando
print(type(50))

# datos decimales || float
print(50.55)
print(75.24)
print(65.9 + 88.07 + 20.10) # lo esta sumando
print(type(69.9))

# datos boolean || boleanos que representan estados
print(True)
print(False)
print(True + False) # lo esta sumando
print(type(False))

# datos de lista || array
print([
    "conejos",
    'liebre',
    """doble conejo""",
    '''pato'''
])

# ||

print([
    23,
    'conejo',
    23.35,
    not True,
    False
])

# datos como el id="" || como una cosn es el ((Tuples)) esto nos
#  permiteque que un (elements) || elementos sean inmutables 
# || que no se puede 

(20, 55, 30)

# dato diccionario 
print(({
    'name' : 'jhon',
    'lastname' : 'zapata',
    'nickname' : 'ghost'
}))

# dato ((None)) no aceta ningun valor || no guarda ningun valor 
None