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
public class UpdateUserServlet extends HttpServlet {

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
        UserDAO ud = new UserDAO();
        String id = request.getParameter("id");
        String url = request.getContextPath() + request.getParameter("url");
        HttpSession session = request.getSession();
        User u = (User) session.getAttribute("user");
        if (url.contains("/admin")) {
            String username = MyMethod.getValueCooky(request, response, "username");
            u = ud.getAccountByUsername(username);
        }
        String first_name = request.getParameter("first-name");
        String last_name = request.getParameter("last-name");
        String old_password = request.getParameter("old-password");
        String new_password = request.getParameter("new-password");
        String verify_password = request.getParameter("verify-password");
        String email = request.getParameter("email");
        response.setContentType("text/html;charset=UTF-8");
        Boolean flag = true;
        MyMethod.removeCooky(request, response, "mess_update-user");
//        MyMethod.removeCooky(request, response, "username");
        Cookie c_message_update_user = new Cookie("mess_update-user", "update_user_1");
        if (MyMethod.checkInput(old_password)) {
            if (old_password.equals(u.getPassword())) {
                if (new_password.equals(verify_password)) {
                    if (MyMethod.checkInput(new_password)) {
                        u.setPassword(new_password);
                    } else {
                        flag = false;
                    }
                } else {
                    flag = false;
                    c_message_update_user.setValue("update_user_3");
                }
            } else {
                flag = false;
                c_message_update_user.setValue("update_user_2");
            }
        }
        c_message_update_user.setMaxAge(1);
        c_message_update_user.setPath(url);
        response.addCookie(c_message_update_user);
        if (MyMethod.checkInput(first_name) && flag) {
            u.setFirs_name(first_name);
        }
        if (MyMethod.checkInput(last_name) && flag) {
            u.setLast_name(last_name);
        }
        if (MyMethod.checkInput(email) && flag) {
            u.setEmail(email);
        }
        
        ud.updateUser(u);
        if (url.contains("/admin")) {
            Cookie c = MyMethod.createCooky("isAccess", "true", 1);
            c.setPath(url);
            response.addCookie(c);
        }
        response.sendRedirect(url);
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
