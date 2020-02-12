from ClassDirectory.CompanyInfo import *
from EventControll.serverControl import *
from PyQt5.QtWidgets import QTableWidgetItem

class Container:
    def __init__(self, window):
        self.window = window
        self.companyInfo = CompanyInfo(window)
        self.refreshContainer()


    def insertCompanyArrayToList(self , window, companyArray):
        window.tableWidget.setRowCount(0)
        window.tableWidget.setRowCount(len(companyArray))
        for j in range(0, len(companyArray)):
            for i in range(0, 11):
                window.tableWidget.setItem(j, i, QTableWidgetItem(companyArray[j].getItemsByIndex(i)))

    def refreshContainer(self):
        self.companyInfo.clearAllEditText()
        self.companyList=connect_get_all_data()
        self.insertCompanyArrayToList(self.window,self.companyList)


    def getCompany(self):
        return self.companyInfo.makeCompany()


