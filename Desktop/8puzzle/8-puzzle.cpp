#include <iostream>
#include <vector>
#include <queue>
// #include <limits>
// #include "hueristics.h"
//store nodes moved
// vector n

int main (){
    int userChoice; 
    bool menuOn = true; 
   
    std::cout << "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ \n";
    std::cout << "             WELCOME TO lgari012 & rmart221's 8 PUZZLE SOLVER \n";
    std::cout << "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~";

    while(menuOn){ 
        std::cout << " 1 - Use the Default Puzzle \n";
        std::cout << " 2 - Input your own Puzzle \n"; 
        std::cout << " 3 - Exit \n";
        std::cout;
        std::cin >> userChoice;
        std::cout;

        if (std::cin.fail()){
            std::cin.clear();
            std::cin.ignore(std::numeric_limits<std::streamsize>::max(), '\n');
            std::cout << "Invalid input! Try again. \n";
            continue;
        }
        std::cin.ignore(std::numeric_limits<std::streamsize>::max(), '\n');

        switch (userChoice)
        {
        case 1:
            std::cout << "Function called with default puzzle \n";
            menuOn = false;
            break;

        case 2: 
            std::cout << "Enter your puzzle. Use a 0 to represent the blank space. \n";

            menuOn = false;
            break;
        
        case 3: 
            menuOn = false; 
            std::cout << "Thanks for trying our 8 puzzle solver! \n";
            break;
        default:
            std::cout << "Invalid Inout! Try Again. \n";
            break;
        }
    }
    
    return 0;
}