import pymysql
class Db:
    s = '162.241.61.64' 
    d = 'vymtecno_test' 
    u = 'vymtecno_test' #Your login user
    p = 'FlaskServer' #Your login password
    def query(self,statement):
     
        conn = pymysql.connect(host=self.s, user=self.u,password=self.p,database=self.d)
        cur = conn.cursor(pymysql.cursors.DictCursor)
        cur.execute(statement)
        results = cur.fetchall()
        conn.close()

        return results
    def update(self,statement):
        conn = pymysql.connect(host=self.s, user=self.u,password=self.p,database=self.d)
        cur = conn.cursor(pymysql.cursors.DictCursor)
        cur.execute(statement)
        conn.commit()
        conn.close()
    def insert(self,statement,values):
        values = tuple(values)
        conn = pymysql.connect(host=self.s, user=self.u,password=self.p,database=self.d)
        cur = conn.cursor(pymysql.cursors.DictCursor)
        cur.execute(statement,values)
        conn.commit()
        conn.close()
    
