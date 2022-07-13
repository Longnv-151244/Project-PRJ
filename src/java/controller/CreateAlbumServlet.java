/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package controller;

import dal.AlbumDAO;
import dal.HistoryDAO;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.sql.Timestamp;
import java.text.Normalizer;
import java.util.regex.Pattern;
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
public class CreateAlbumServlet extends HttpServlet {

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
        String create_name = MyMethod.formatNVarchar(request.getParameter("create_name"));
        String create_author = MyMethod.formatNVarchar(request.getParameter("create_author"));
        int category_ID = Integer.parseInt(request.getParameter("create_category"));
        String create_duration = request.getParameter("create_duration");
        Part imageFile = request.getPart("create_image");
        String p_AddressUploadImage = "C:/Users/dclon/OneDrive/Desktop/Web_design/Music-player_PRJ301/web/img/song-img/" + MyMethod.getFolder(category_ID) + "/";
        String create_image = MyMethod.getUpload(imageFile, create_name, p_AddressUploadImage);
        Part audioFile = request.getPart("create_audio");
        String p_AddressUploadAudio = "C:/Users/dclon/OneDrive/Desktop/Web_design/Music-player_PRJ301/web/song-mp3/" + MyMethod.getFolder(category_ID) + "/";
        String create_audio = MyMethod.getUpload(audioFile, create_name, p_AddressUploadAudio);
        Timestamp t_create = MyMethod.getT_now();
        Timestamp t_lastUpdate = MyMethod.getT_now();
        Album a = new Album(create_name, create_author, category_ID, create_duration, create_image, create_audio, t_create, t_lastUpdate);
        AlbumDAO ad = new AlbumDAO();
        ad.inserAlbum(a);
        int album_ID = ad.getIDByNameAndT_create(a);
        int user_ID = Integer.parseInt(MyMethod.getValueCooky(request, response, "user_ID"));
        String username = MyMethod.getValueCooky(request, response, "username");
        History h = new History(user_ID, username, album_ID, create_name, t_lastUpdate, 2);
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
