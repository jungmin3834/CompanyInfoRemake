from Window.Ui_MainWindow import Ui_StartWindow

import requests


def send_message_node(url):
    r = requests.get(url)
    print(r.text)
    return r


def get_host_path(request_type):
    url = "http://localhost:3000/"
    return url + request_type


send_message_node(get_host_path("hello"))


def MainStart():
    if __name__ == "__main__":
        Ui_StartWindow()

##MainStart()
