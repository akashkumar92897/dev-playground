#include <iostream>
#include <list>
using namespace std;
int main (){
    list <int> li = {1, 2, 3, 4, 5};

    //Forward Iterator
    list<int> :: iterator it;
    for (it = li.begin(); it!= li.end(); it++){
        cout << *(it) << endl; //1 2 3 4 5
    }

    cout << "-----------------------------------------------------" << endl;
    
    //Backward Iterator
    for (auto it = li.rbegin(); it!= li.rend(); it++){
        cout << *(it) << endl; // 5 4 3 2 1 
    }

    //auto keyword replace the whole line since C++ understands we are targeting the scope value.
    return 0;
}