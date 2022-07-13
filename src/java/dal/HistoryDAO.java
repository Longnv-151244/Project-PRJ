/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dal;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.logging.Level;
import java.util.logging.Logger;
import model.History;

/**
 *
 * @author dclon
 */
public class HistoryDAO extends BaseDAO<History> {

    @Override
    public ArrayList<History> getAll() {
        ArrayList<History> histories = new ArrayList<>();
        try {
            String sql = "SELECT id, user_ID, user_name, album_ID, album_name, t_lastUpdate, action_ID\n"
                    + "FROM history_Album";
            PreparedStatement st = connection.prepareStatement(sql);
            ResultSet rs = st.executeQuery();
            while (rs.next()) {
                History h = new History();
                h.setId(rs.getInt("id"));
                h.setUser_ID(rs.getInt("user_ID"));
                h.setUser_name(rs.getString("user_name"));
                h.setAlbum_ID(rs.getInt("album_ID"));
                h.setAlbum_name(rs.getString("album_name"));
                h.setT_lastUpdate(rs.getTimestamp("t_lastUpdate"));
                h.setAction_ID(rs.getInt("action_ID"));
                histories.add(h);
            }
        } catch (SQLException ex) {
            Logger.getLogger(RoleDAO.class.getName()).log(Level.SEVERE, null, ex);
        }
        return histories;
    }

    public void insertHistory(History h) {
        try {
            String sql = "INSERT into history_Album([user_ID],[user_name], [album_ID],[album_name], t_lastUpdate, [action_ID])\n"
                    + "VALUES\n"
                    + "(?,?,?,?,?,?)";
            PreparedStatement st = connection.prepareStatement(sql);
            st.setInt(1, h.getUser_ID());
            st.setString(2, h.getUser_name());
            st.setInt(3, h.getAlbum_ID());
            st.setString(4, h.getAlbum_name());
            st.setTimestamp(5, h.getT_lastUpdate());
            st.setInt(6, h.getAction_ID());
            st.executeUpdate();
        } catch (Exception e) {
        }
    }

}
