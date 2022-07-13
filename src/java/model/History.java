/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package model;

import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.Locale;

/**
 *
 * @author dclon
 */
public class History {

    private int id;
    private int user_ID;
    private String user_name;
    private int album_ID;
    private String album_name;
    private Timestamp t_lastUpdate;
    private int action_ID;

    public History() {
    }

    public History(int user_ID, String user_name, int album_ID, String album_name, Timestamp t_lastUpdate, int action_ID) {
        this.user_ID = user_ID;
        this.user_name = user_name;
        this.album_ID = album_ID;
        this.album_name = album_name;
        this.t_lastUpdate = t_lastUpdate;
        this.action_ID = action_ID;
    }

    public History(int id, int user_ID, String user_name, int album_ID, String album_name, Timestamp t_lastUpdate, int action_ID) {
        this.id = id;
        this.user_ID = user_ID;
        this.user_name = user_name;
        this.album_ID = album_ID;
        this.album_name = album_name;
        this.t_lastUpdate = t_lastUpdate;
        this.action_ID = action_ID;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getUser_ID() {
        return user_ID;
    }

    public void setUser_ID(int user_ID) {
        this.user_ID = user_ID;
    }

    public String getUser_name() {
        return user_name;
    }

    public void setUser_name(String user_name) {
        this.user_name = user_name;
    }

    public int getAlbum_ID() {
        return album_ID;
    }

    public void setAlbum_ID(int album_ID) {
        this.album_ID = album_ID;
    }

    public String getAlbum_name() {
        return album_name;
    }

    public void setAlbum_name(String album_name) {
        this.album_name = album_name;
    }

    public Timestamp getT_lastUpdate() {
        return t_lastUpdate;
    }

    public void setT_lastUpdate(Timestamp t_lastUpdate) {
        this.t_lastUpdate = t_lastUpdate;
    }

    public int getAction_ID() {
        return action_ID;
    }

    public void setAction_ID(int action_ID) {
        this.action_ID = action_ID;
    }
    
    public String getT_lastUpdateStringMore() {
        SimpleDateFormat fm = new SimpleDateFormat("MMM dd, yyyy hh:mm:ss", Locale.US);
        String sDate = fm.format(t_lastUpdate);
        return sDate;
    }

}
