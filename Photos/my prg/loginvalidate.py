#!"C:/Users/Divya bharathi  K/AppData/Local/Programs/Python/Python38/python.exe"
print("Content-Type:text/html\r\n")
import cgi
import pymysql
form=cgi.FieldStorage()
uname=form.getvalue("uname")
upwd=form.getvalue("upwd")
con=pymysql.connect(user="root",password="root",host="localhost",database="divyab")
if(con):
    cursor=con.cursor()
    squery="select * from tbl_registration where uname='%s' and upwd='%s' "%(uname,upwd)
    if(cursor.execute(squery)>0):
        print("<script>alert('Login Success');location.href='mainpage.py';</script>")
    else:
        print("<script>alert('Invalid Credentials');location.href='index.html';</script>")
else:
    print("Error in Db Connection")



