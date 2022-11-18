
package pila;

import java.util.Scanner;


public class Classprincipal {

   
    public static void main(String[] args) {
        
        NewClass ojt = new NewClass();
        Scanner teclado = new Scanner(System.in);
        int opcion;
        
        do {
        System.out.print( "\n Menu de la pila ");
        System.out.print( "\n 1. ingrese un elemento: ");
        System.out.print( "\n 2. elminar elemento: ");
        System.out.print( "\n 3. monstrar la pila completa: ");
        System.out.print( "\n 4. salir de la pila ");
        System.out.print( "\n 5. ingresa una opcion: ");
        opcion=teclado.nextInt();
        switch(opcion){
            case 1:
                ojt.push();
                break;
            case 2:
                ojt.pop();
                break;
            case 3:
                ojt.mostrarpila();
                break;
            case 4:
                break;
            default:
                System.out.print( "\n ingresa una opcion valida. ");
                       
                }
        }while(opcion!=4);
    
    
    
       
        }
    
}
