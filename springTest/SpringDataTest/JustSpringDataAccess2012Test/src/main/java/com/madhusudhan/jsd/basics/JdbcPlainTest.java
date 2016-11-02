package com.madhusudhan.jsd.basics;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class JdbcPlainTest {

	private Connection createConnection() {
		Connection conn = null;
		try {

			Class.forName("com.mysql.jdbc.Driver");

			conn = DriverManager.getConnection(
					"jdbc:mysql://localhost:3306/JSDATA", "XXXX", "XXXX");

		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (SQLException e) {
			e.printStackTrace();
		}

		return conn;

	}

	private void query() {

		ResultSet rs = null;

		Statement stmt = null;

		Connection conn = createConnection();

		try {
		
			stmt = conn.createStatement();

			rs = stmt.executeQuery("SELECT * FROM TRADES");

			while (rs.next())
				System.out.println(rs.getString(1));

		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			try {
				rs.close();

				stmt.close();

				conn.close();
			} catch (SQLException ex) {

			}
		}
	}

	public static void main(String args[]) {
		JdbcPlainTest t = new JdbcPlainTest();

		t.query();
	}

}
