package com.hopu.community_task.util;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.Part;

public class HttpUtil {

	public static String upload(HttpServletRequest request, String name, String upload_path)
			throws IOException, ServletException {
		// ����ļ�·�����ļ���
		String fileName = "";

		Part part = request.getPart(name);
		if (part != null) {
			String realName =  part.getSubmittedFileName();
			System.out.println(realName+"====realName");

			// ִ���ļ��ϴ�
			if (!realName.equals("")) {
				fileName = FileHelper.generateFileName(realName);
				File file = new File(upload_path, fileName);
				if (!file.exists()) {
					file.createNewFile();
				}
				InputStream in = part.getInputStream();
				FileOutputStream out = new FileOutputStream(file);
				byte[] cache = new byte[256];
				int length = 0;
				while ((length = in.read(cache)) != -1) {
					out.write(cache, 0, length);
				}
				out.flush();
				if (out != null) {
					out.close();
				}
				if (in != null) {
					in.close();
				}

			}

		}

		return fileName;

	}

}
