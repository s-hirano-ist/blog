import os

DIR_PATH = "@assets/photo"


def generate_row(file_name: str, file_name_no_ext: str) -> str:
    return f'import {file_name_no_ext} from "{DIR_PATH}/{file_name}";\n'


if __name__ == "__main__":
    file_name_list = sorted(os.listdir("./src/assets/photo"))
    file_name_list_no_ext = [
        os.path.splitext(file_name)[0] for file_name in file_name_list
    ]
    data_list = [
        generate_row(file_name, file_name_no_ext)
        for file_name, file_name_no_ext in zip(file_name_list, file_name_list_no_ext)
    ]

    data_list.append("\n // THIS FILE IS AUTO GENERATED BY SCRIPT. \n")
    data_list.append("\n export const CONTENTS = [")
    data_list.append(",".join(file_name_list_no_ext))
    data_list.append("\n ]")
    f = open("./src/content/_photo/data.ts", "w")
    f.writelines(data_list)
    f.close()
