/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package controller;

import dal.UserDAO;
import javax.servlet.http.HttpSession;
import javax.servlet.http.HttpSessionEvent;
import javax.servlet.http.HttpSessionListener;
import model.User;

/**
 * Web application lifecycle listener.
 *
 * @author dclon
 */
public class MyListener implements HttpSessionListener {

    @Override
    public void sessionCreated(HttpSessionEvent event) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public void sessionDestroyed(HttpSessionEvent event) {
//        HttpSession session = event.getSession();
//        User u = (User) session.getAttribute("user");
//        UserDAO ud = new UserDAO();
//        ud.updateStatus(u.getId(), false);
    }
}
