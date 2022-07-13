/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package controller;

import dal.UserDAO;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import model.MyMethod;
import model.User;

/**
 *
 * @author dclon
 */
public class SignInServlet extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String username = request.getParameter("username");
        String password = request.getParameter("password");
        String url_Request = request.getParameter("url");
        UserDAO ud = new UserDAO();
        User user = ud.getAccountByUsernameAndPassword(username, password);
        HttpSession session = request.getSession();
        MyMethod.removeCooky(request, response, "mess_login-user");
        MyMethod.removeCooky(request, response, "username");
//        Cookie[] cookies = request.getCookies();
//        if (cookies != null) {
//            for (Cookie cooky : cookies) {
//                if (cooky.getName().equals("mess_login-user")) {
//                    cooky.setValue(null);
//                    cooky.setMaxAge(0);
//                    response.addCookie(cooky);
//                }
//                if (cooky.getName().equals("username")) {
//                    cooky.setValue(null);
//                    cooky.setMaxAge(0);
//                    response.addCookie(cooky);
//                }
//            }
//        }
        Cookie c_mess_login = new Cookie("mess_login-user", "login_1");
        if (user != null) // login successfully!
        {
            Cookie c_user = new Cookie("username", username);
            c_user.setMaxAge(3600 * 3);
            response.addCookie(c_user);
            ud.updateT_lastOnline(user.getId());
            ud.updateStatus(user.getId(), true);
            session.setAttribute("user", user);
        } else //login fail
        {
            c_mess_login.setValue("login_2");
        }
        c_mess_login.setMaxAge(1);
        response.addCookie(c_mess_login);
        response.sendRedirect(url_Request);
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
