#include <iostream>
#include <stack>
using namespace std;
int main (){
    stack <int> s; 
    s.push(1);
    s.push(2);
    s.emplace(3);
    s.emplace(4);

    cout << s.top() << endl; //4
    s.pop();
    cout << s.top() << endl; //3

    cout << s.size() << endl; // 3
    cout << s.empty() << endl; //0
    
    // stack <int> s1;
    // s1.swap(s);
    // cout << s1.size() << endl; // 3
    // cout << s.size() << endl; // 0
    
    while (!s.empty()){
        cout << s.top() << " ";
        s.pop();
    }
    cout << endl;
    cout << s.size() << endl; //0
    
    return 0;
}