package org.sekhar;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;

public class AWSRDS {

	public static void main(String[] args) throws Exception {

		// CreateDatabase();
		CreateTable();
		InsertRecord();

	}

	// Create database.
	public static void CreateDatabase() throws Exception {

		// Register database driver.
		Class.forName("com.mysql.jdbc.Driver");

		// Database credentials.
		String userName = "admin";
		String password = "Passw0rd123$";

		// RDS url.
		String dbUrl = "jdbc:mysql://appdb.cllip0nk68vc.ap-southeast-1.rds.amazonaws.com/";

		// Create connection to RDS instance.
		Connection con = DriverManager.getConnection(dbUrl, userName, password);

		// Creates a Statement object for sending SQL statements to the
		// database.
		Statement stm = con.createStatement();

		// Create database query.
		String sql = "CREATE DATABASE websupport";

		// Execute query.
		stm.executeUpdate(sql);
	}

	// Create table.
	public static void CreateTable() throws Exception {

		// Register database driver.
		Class.forName("com.mysql.jdbc.Driver");

		// Database credentials.
		String userName = "admin";
		String password = "Passw0rd123$";

		// RDS url.
		String dbUrl = "jdbc:mysql://appdb.cllip0nk68vc.ap-southeast-1.rds.amazonaws.com/websupport";

		// Create connection to RDS instance.
		Connection con = DriverManager.getConnection(dbUrl, userName, password);

		// Creates a Statement object for sending SQL statements to the
		// database.
		Statement stm = con.createStatement();

		// Create database query.
		String sql = "CREATE TABLE tickets (ID int, frm VARCHAR(20),msg VARCHAR(2000));";

		// Execute query.
		stm.executeUpdate(sql);
	}

	// Insert record.
	public static void InsertRecord() throws Exception {

		// Register database driver.
		Class.forName("com.mysql.jdbc.Driver");

		// Database credentials.
		String userName = "admin";
		String password = "Passw0rd123$";

		// RDS url.
		String dbUrl = "jdbc:mysql://appdb.cllip0nk68vc.ap-southeast-1.rds.amazonaws.com/websupport";

		// Create connection to RDS instance.
		Connection con = DriverManager.getConnection(dbUrl, userName, password);

		// Creates a Statement object for sending SQL statements to the
		// database.
		Statement stm = con.createStatement();

		// Create database query.
		String sql = "INSERT INTO tickets(ID, frm, msg) VALUES(1, 'andrew@gmail.com', 'Issue while logging into site...');";

		// Execute query.
		stm.executeUpdate(sql);
	}

}
