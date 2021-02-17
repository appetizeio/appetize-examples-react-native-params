package com.simgplesp.app;

import android.content.Context;
import android.content.SharedPreferences;
import android.os.Bundle;

import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

//    SharedPreferences prefs = getSharedPreferences("prefs.db", MODE_PRIVATE);
//    prefs.edit().putBoolean("yoga",true).commit();

  }

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */



  @Override
  protected String getMainComponentName() {
    return "SimgpleSP";
  }
}
