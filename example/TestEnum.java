// package xyz

// imports

import java.lang.String;


public enum TestEnum implements com.touchableheroes.TestInterface
{

       
          private final String  _id;;
       
          private final int  count;;
       

       
          
    TestEnum( final String _id, final int count )
    {
       
          this._id = _id;
       
          this.count = count;
       
    };
       

       
          
    /**
     * GETTER for property _id;
     */
    public final String get_id() {
         return _id;
    };
       
          
    /**
     * GETTER for property count;
     */
    public final int getCount() {
         return count;
    };
       

}