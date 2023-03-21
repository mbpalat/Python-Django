import java.util.*;

public class CuboidVolume{
    public static void main(String[] args){

        Scanner sc = new Scanner(System.in);
        int length, width, height, volume;

        System.out.println("Enter Length of Cuboid :");
        length = sc.nextInt();  

        System.out.println("Enter Length of Cuboid :");
        width = sc.nextInt();  
        
        System.out.println("Enter Length of Cuboid :");
        height = sc.nextInt(); 

        if(length > 0 && width > 0 && height > 0){
            volume = length * width * height ;
            System.out.println("Volume of Cuboid :" + volume );       
        }else{
            System.out.println("Invalid Inputs");
        }

        

    }
}