import pymysql
class Db:
    s = '162.241.61.64' 
    d = 'vymtecno_test' 
    u = 'vymtecno_test' #Your login user
    p = 'FlaskServer' #Your login password
    def query(self,statement):
        conn = pymysql.connect(host=self.s, user=self.u,password=self.p,database=self.d)
        cur = conn.cursor()
        results = cur.execute(statement)
        conn.close()
        return results
    
