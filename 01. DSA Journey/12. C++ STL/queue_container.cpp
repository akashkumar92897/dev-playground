#include <iostream>
#include <queue>
using namespace std;
int main (){
    queue <int> q; 
    q.push(1);
    q.push(2);
    q.emplace(3);
    q.emplace(4);

    cout << q.front() << endl; //1
    q.pop();
    cout << q.front() << endl; //2

    cout << q.size() << endl; // 3
    cout << q.empty() << endl; //0
    
    queue <int> q1;
    q1.swap(q);
    cout << q1.size() << endl; // 3
    cout << q.size() << endl; // 0
    
    // while (!q.empty()){
    //     cout << q.front() << " "; //2 3 4
    //     q.pop();
    // }
    // cout << endl;
    cout << q.size() << endl; //0
    
    return 0;
}