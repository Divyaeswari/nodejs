#!"C:/Users/Divya bharathi  K/AppData/Local/Programs/Python/Python38/python.exe"
print("Content-Type:text/html\r\n")
import cgi
import pymysql
form=cgi.FieldStorage()
uname=form.getvalue("uname")
upwd=form.getvalue("upwd")
uemail=form.getvalue("uemail")
unumber=form.getvalue("unumber")
con=pymysql.connect(user="root",password="root",host="localhost",database="divyab")
if(con):
    cursor=con.cursor()
    squery="select * from tbl_registration where uemail='%s' or unumber=%d"%(uemail,int(unumber))
    if(cursor.execute(squery)>0):
        print("<script>alert('Already Exists');location.href='index.html';</script>")
    else:
        query="insert into tbl_registration (uname,upwd,uemail,unumber) values('%s','%s','%s',%d)"%(uname,upwd,uemail,int(unumber))
        res=cursor.execute(query)
        if (res==1):
            con.commit()
            print("<script>alert('Registration Successfully');location.href='index.html';</script>")
        else:
            con.rollback()
            print("<script>Alert('Error in Registering');location.href='index.html';</script>")
else:
    print("Error in MySQL Server Connectivity")




