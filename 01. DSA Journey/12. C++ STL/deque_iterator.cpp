#include <iostream>
#include <deque>
using namespace std;
int main (){
    deque <int> de = {1, 2, 3, 4, 5};

    //Forward Iterator
    deque<int> :: iterator it;
    for (it = de.begin(); it!= de.end(); it++){
        cout << *(it) << endl; //1 2 3 4 5
    }

    cout << "-----------------------------------------------------" << endl;
    
    //Backward Iterator
    for (auto it = de.rbegin(); it!= de.rend(); it++){
        cout << *(it) << endl; // 5 4 3 2 1 
    }

    //auto keyword replace the whole line since C++ understands we are targeting the scope value.
    return 0;
}