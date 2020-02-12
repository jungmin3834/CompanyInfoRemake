# -*- coding: utf-8 -*-
from Window.Info_Window import *
from Container.Container import *
from Window.Ui_DeleteCode import *
from Window.Ui_InputText import *
from EventControll.serverControl import *


class FucntionControl:
    def __init__(self, window):
        self.window = window
        self.initProject()

    def initProject(self):
        self.companyContainer = Container(self.window)

#회사 입력 버튼 클리어!
    def btn_insert(self):
        company = self.companyContainer.getCompany()
        if len(company.company) > 0 and len(company.job) > 0 and len(company.sales) > 0:
            connect_insert(company)

#업데이트 버튼 클리어! /위에 창 업데이트 + 리스트 수정만 해주면 됨.
    def btn_update(self):
        company = self.companyContainer.getCompany()
        index = self.getSelectRowIndex()
        if len(company.company) > 0 and len(company.job) > 0 and len(company.sales) > 0:
            connect_update(company ,self.companyContainer.companyList[index].company)
            self.companyContainer.refreshContainer()


    #로우 클릭시 위에 창 업데이트 해야하는거 민수형 파일 이용
    def btn_listviewItemClick(self):
        index = self.getSelectRowIndex()
        self.companyContainer.companyInfo.makeUpEditText(self.companyContainer.companyList[index])

    #삭제 버튼 클리어! (선택한거)
    def btn_delete(self):
        self.btn_openDelete()
        connect_delete()
        #remove(self.companyContainer.getCompany())
        #self.companyContainer.refreshContainer()

    # 새로 고침 버튼 클릭시
    def btn_refresh(self):
        self.companyContainer.refreshContainer()

    # 회사 정보 창 오픈
    def btn_openInfo(self):
        self.dialog = QtWidgets.QMainWindow()
        self.dialog.ui = Info_Window(self.dialog,self.companyContainer.getCompany())
        self.dialog.show()

    # 삭제 코드 창 오픈
    def btn_openDelete(self):
        return True
        if(str(Ui_DeleteCode())):
            print("삭제 되었음")
            return True
        else:
            print("삭제 불가능")
            return False


    # 입력 확장 버튼 클릭
    def btn_openInput(self):
        a = Ui_InputText()



    # 로우 선택 시
    def getSelectRowIndex(self):
        index = self.window.tableWidget.selectionModel().currentIndex().row()
        return index
