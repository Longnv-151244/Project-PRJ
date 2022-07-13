/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dal;

import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Timestamp;
import java.util.ArrayList;
import model.User;

/**
 *
 * @author dclon
 */
public class UserDAO extends BaseDAO<User> {

    @Override
    public ArrayList<User> getAll() {
        ArrayList<User> users = new ArrayList<>();
        try {
            String sql = "SELECT id, username, password, first_name, last_name, "
                    + "avatar, role_ID, t_create, t_lastOnline, email\n"
                    + "FROM Users";
            PreparedStatement st = connection.prepareStatement(sql);
            ResultSet rs = st.executeQuery();
            try {
                while (rs.next()) {
                    User u = new User();
                    u.setId(rs.getInt("id"));
                    u.setUsername(rs.getString("username"));
                    u.setPassword(rs.getString("password"));
                    u.setFirs_name(rs.getString("first_name"));
                    u.setLast_name(rs.getString("last_name"));
                    u.setAvatar(rs.getString("avatar"));
                    u.setRole_id(rs.getInt("role_ID"));
                    u.setT_create(rs.getTimestamp("t_create"));
                    u.setT_lastOnline(rs.getTimestamp("t_lastOnline"));
                    u.setEmail(rs.getString("email"));
                    users.add(u);
                }
            } catch (Exception e) {
            }
        } catch (Exception e) {
        }
        return users;
    }

    public User getAccountByUsername(String username) {
        User u = new User();
        try {
            String sql = "SELECT id, username, password, first_name, last_name, avatar, role_ID, t_create, t_lastOnline, email\n"
                    + "From Users\n"
                    + "WHERE [username] = ?";
            PreparedStatement st = connection.prepareStatement(sql);
            st.setString(1, username);
            ResultSet rs = st.executeQuery();
            if (rs.next()) {
                u.setId(rs.getInt("id"));
                u.setUsername(rs.getString("username"));
                u.setPassword(rs.getString("password"));
                u.setFirs_name(rs.getString("first_name"));
                u.setLast_name(rs.getString("last_name"));
                u.setAvatar(rs.getString("avatar"));
                u.setRole_id(rs.getInt("role_ID"));
                u.setT_create(rs.getTimestamp("t_create"));
                u.setT_lastOnline(rs.getTimestamp("t_lastOnline"));
                u.setEmail(rs.getString("email"));
                return u;
            }
        } catch (Exception e) {
            System.out.println("Error");
        }
        return null;
    }

    public User getAccountByUsernameAndPassword(String username, String password) {
        User u = new User();
        try {
            String sql = "SELECT id, username, password, first_name, last_name, avatar, role_ID, t_create, t_lastOnline, email\n"
                    + "From Users\n"
                    + "WHERE [username] = ? and [password] = ? ";
            PreparedStatement st = connection.prepareStatement(sql);
            st.setString(1, username);
            st.setString(2, password);
            ResultSet rs = st.executeQuery();
            if (rs.next()) {
                u.setId(rs.getInt("id"));
                u.setUsername(rs.getString("username"));
                u.setPassword(rs.getString("password"));
                u.setFirs_name(rs.getString("first_name"));
                u.setLast_name(rs.getString("last_name"));
                u.setAvatar(rs.getString("avatar"));
                u.setRole_id(rs.getInt("role_ID"));
                u.setT_create(rs.getTimestamp("t_create"));
                u.setT_lastOnline(rs.getTimestamp("t_lastOnline"));
                u.setEmail(rs.getString("email"));
                return u;
            }
        } catch (Exception e) {
            System.out.println("Error");
        }
        return null;
    }

    public void insertUser(User s) {
        try {
            String sql = "INSERT INTO Users(username, [password], role_ID, t_create, email)\n"
                    + "VALUES (?, ?, ?, ?, ?)";
            PreparedStatement st = connection.prepareStatement(sql);
            st.setString(1, s.getUsername());
            st.setString(2, s.getPassword());
            st.setInt(3, s.getRole_id());
            st.setTimestamp(4, s.getT_create());
            st.setString(5, s.getEmail());
            st.executeUpdate();
        } catch (Exception e) {
        }
    }

    public void updateUser(User u) {
        try {
            String sql = "Update Users\n"
                    + "SET first_name = ?, last_name = ?, password = ?, email=?\n"
                    + "WHERE id = ?";
            PreparedStatement st = connection.prepareStatement(sql);
            st.setString(1, u.getFirs_name());
            st.setString(2, u.getLast_name());
            st.setString(3, u.getPassword());
            st.setString(4, u.getEmail());
            st.setInt(5, u.getId());
            st.executeUpdate();
        } catch (Exception e) {
        }
    }

    public void updateUserToAdmin(int id) {
        try {
            String sql = "UPDATE Users\n"
                    + "set role_ID = 2\n"
                    + "where id = ?";
            PreparedStatement st = connection.prepareStatement(sql);
            st.setInt(1, id);
            st.executeUpdate();
        } catch (Exception e) {
        }
    }

    public void updateT_lastOnline(int id) {
        try {
            String sql = "UPDATE Users\n"
                    + "SET t_lastOnline = ?\n"
                    + "WHERE id = ?";
            java.util.Date nowDate = new java.util.Date();
            Timestamp now = new Timestamp(nowDate.getTime());
            PreparedStatement st = connection.prepareCall(sql);
            st.setTimestamp(1, now);
            st.setInt(2, id);
            st.executeUpdate();
        } catch (Exception e) {
        }
    }

    public void updateStatus(int id, boolean status) {
        try {
            String sql = "UPDATE Users\n"
                    + "SET status = ?\n"
                    + "WHERE id = ?";
            java.util.Date nowDate = new java.util.Date();
            Timestamp now = new Timestamp(nowDate.getTime());
            PreparedStatement st = connection.prepareCall(sql);
            st.setBoolean(1, status);
            st.setInt(2, id);
            st.executeUpdate();
        } catch (Exception e) {
        }
    }

}
