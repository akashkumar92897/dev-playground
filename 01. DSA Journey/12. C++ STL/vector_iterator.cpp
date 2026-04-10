#include <iostream>
#include <vector>
using namespace std;
int main (){
    vector <int> vec = {1, 2, 3, 4, 5};

    //Forward Iterator
    vector<int> :: iterator it;
    for (it = vec.begin(); it!= vec.end(); it++){
        cout << *(it) << endl; //1 2 3 4 5
    }

    cout << "-----------------------------------------------------" << endl;
    
    //Backward Iterator
    for (auto it = vec.rbegin(); it!= vec.rend(); it++){
        cout << *(it) << endl; // 5 4 3 2 1 
    }

    //auto keyword replace the whole line since C++ understands we are targeting the scope value.
    return 0;
}