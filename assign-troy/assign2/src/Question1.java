// Ziang Li Troy Question1
public class Question1 {

	public static void main(String[] args)
    {
            for (int T = 0 ;  T < 10 ; T++)
            {    
                for (int O = 0 ; O < 10 ; O++)
                {    
                    for (int G = 0 ; G < 10 ; G++)
                    {    
                        for (int D = 0 ; D < 10 ; D++)
                        {    
                        	if (4*(T*100+O*10+O) == G*1000+O*100+O*10+D && T != O && T != G && T != D && O != G && O != D && G != D)
                            {
                            	System.out.print(T);
                            	System.out.print(O);
                            	System.out.print(O);
                            	
                            	System.out.print("+");
                            	
                            	System.out.print(T);
                            	System.out.print(O);
                            	System.out.print(O);
                            	
                            	System.out.print("+");
                            	
                            	System.out.print(T);
                            	System.out.print(O);
                            	System.out.print(O);
                            	
                            	System.out.print("+");
                            	
                            	System.out.print(T);
                            	System.out.print(O);
                            	System.out.print(O);
                            	System.out.print("=");
                            	
                            	System.out.print(G);
                            	System.out.print(O);
                            	System.out.print(O);
                            	System.out.print(D);
                            	System.out.println();
                            	System.exit(0);
                            }
                        }
                    }
                }      
            }
       }
    }

  


