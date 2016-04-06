package observer.pattern.demo;
import com.sun.xml.internal.ws.policy.privateutil.PolicyUtils;

import java.util.*;

   interface IObserver
   {
       void update();
   }
   //class Observer implements IObserver
   class Observer implements IObserver
    {        
    	//@Override
    	public void update()
        {
        	System.out.println("flag value changed in Subject");
        }		
    }

    interface ISubject
    {
        void register(IObserver o);
        void unregister( IObserver o);
        void notifyObservers();
    }
    class Subject implements ISubject
    {
        //List<IObserver> observerList = new ArrayList<IObserver>();
    	List<IObserver> observerList = new ArrayList<IObserver>();
        private int _flag;
		public int getFlag()
        {
           return _flag;
        }
        public void setFlag(int _flag)    
        {
                this._flag=_flag;
                //flag value changed .So notify observer(s)
                 notifyObservers();
        }
        @Override
        public void register(IObserver o)
        { 
            observerList.add(o);
        }
        @Override
        public void unregister(IObserver o)
        {
            observerList.remove(o);
        }
        @Override
        public void notifyObservers() 
        { 
           for(int i=0;i<observerList.size();i++)
        	{
        		observerList.get(i).update();
        	}
        }		
    }
class  ObserverPatternEx
{
	public static void main(String[] args)
    {
		System.out.println("***Observer Pattern Demo***\n");
		IObserver o1 = new Observer();
        Subject sub1 = new Subject();
        sub1.register(o1);
        System.out.println("Setting Flag = 5 ");
        sub1.setFlag(5);
        System.out.println("Setting Flag = 25 ");
        sub1.setFlag(25);
        sub1.unregister(o1);
        //No notification this time to o1 .Since it is unregistered.
        System.out.println("Setting Flag = 50 ");
        sub1.setFlag(50);        
    }
}

