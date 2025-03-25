datos = []
userPhone = []

name = str(input('ingrese su nombre'))
lastName = str(input('ingrese su nombre'))
dni = int(input('ingrese su dni'))

while True :
    phone = int(input('ingrese su numero de telefono'))
    asnwer = str(input('¿Desea ingresar otro numero de telefono?')).lower().strip() 
    userPhone.append(phone)
    if asnwer == "no":
        break

datos+=[name,lastName,dni,userPhone]

print(datos)
        




