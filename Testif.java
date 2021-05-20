public class Testif{
    public static void main(String[] args){
    LOOP:
        for(char c='a';c<='z';c++){
            switch(c){
                case 'a': continue;
                case 'z':
                case 'm': break LOOP;
            }
            System.out.print(c);
        }
        System.out.println("");
        long sum=0,i=1,max=1931918,N=0;
        while(true){
            sum=sum+i;
            if(sum>max){
                N=i-1;
                break;
            }
            i++;
        }
        System.out.println("满足1+2+...+n<="+max+"的最大整数n为"+N);
}}
