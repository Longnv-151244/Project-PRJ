/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package controller;

import dal.AlbumDAO;
import dal.HistoryDAO;
import java.io.IOException;
import java.io.PrintWriter;
import java.lang.reflect.Method;
import java.sql.Timestamp;
import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.servlet.http.Part;
import model.Album;
import model.History;
import model.MyMethod;
import model.User;

/**
 *
 * @author dclon
 */
@MultipartConfig(
        fileSizeThreshold = 1024 * 1024 * 1, // 1 MB
        maxFileSize = 1024 * 1024 * 10, // 10 MB
        maxRequestSize = 1024 * 1024 * 100 // 100 MB
)
public class UpdateAlbumServlet extends HttpServlet {

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
        String url = request.getContextPath() + "/admin";
        int album_ID = Integer.parseInt(request.getParameter("id"));
        AlbumDAO ad = new AlbumDAO();
        Album a = ad.getAlbumByID(album_ID);
        String edit_name = MyMethod.formatNVarchar(request.getParameter("edit_name"));
        a.setName(edit_name);
        String edit_author = MyMethod.formatNVarchar(request.getParameter("edit_author"));
        a.setAuthor(edit_author);
        int category_ID = Integer.parseInt(request.getParameter("edit_category"));
        a.setCategory_id(category_ID);
        String edit_duration = request.getParameter("edit_duration");
        a.setDuration(edit_duration);
        Part imageFile = request.getPart("edit_image");
        if (imageFile.getSize() != 0) {
            String p_AddressUploadImage = "C:/Users/dclon/OneDrive/Desktop/Web_design/Music-player_PRJ301/web/img/song-img/" + MyMethod.getFolder(category_ID) + "/";
            String edit_image = MyMethod.getUpload(imageFile, edit_name, p_AddressUploadImage);
            a.setImage(edit_image);
        }
        Part audioFile = request.getPart("edit_audio");
        if (audioFile.getSize() != 0) {
            String p_AddressUploadAudio = "C:/Users/dclon/OneDrive/Desktop/Web_design/Music-player_PRJ301/web/song-mp3/" + MyMethod.getFolder(category_ID) + "/";
            String edit_audio = MyMethod.getUpload(audioFile, edit_name, p_AddressUploadAudio);
            a.setPath(edit_audio);
        }
        Timestamp t_lastUpdate = MyMethod.getT_now();
        a.setT_lastUpdate(t_lastUpdate);
        ad.updateAlbum(a);
        int user_ID = Integer.parseInt(MyMethod.getValueCooky(request, response, "user_ID"));
        String username = MyMethod.getValueCooky(request, response, "username");
        History h = new History(user_ID, username, album_ID, edit_name, t_lastUpdate, 3);
        HistoryDAO hd = new HistoryDAO();
        hd.insertHistory(h);
        Cookie c = MyMethod.createCooky("isAccess", "true", 1);
        c.setPath(url);
        response.addCookie(c);
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
