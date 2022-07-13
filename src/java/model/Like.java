/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package model;

import java.sql.Timestamp;

/**
 *
 * @author dclon
 */
public class Like {
    private int id;
    private int user_ID;
    private int album_ID;
    private Timestamp t_lastUpdate;

    public Like() {
    }

    public Like(int user_ID, int album_ID, Timestamp t_lastUpdate) {
        this.user_ID = user_ID;
        this.album_ID = album_ID;
        this.t_lastUpdate = t_lastUpdate;
    }

    public Like(int id, int user_ID, int album_ID, Timestamp t_lastUpdate) {
        this.id = id;
        this.user_ID = user_ID;
        this.album_ID = album_ID;
        this.t_lastUpdate = t_lastUpdate;
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

    public int getAlbum_ID() {
        return album_ID;
    }

    public void setAlbum_ID(int album_ID) {
        this.album_ID = album_ID;
    }

    public Timestamp getT_lastUpdate() {
        return t_lastUpdate;
    }

    public void setT_lastUpdate(Timestamp t_lastUpdate) {
        this.t_lastUpdate = t_lastUpdate;
    }
    
    
}
