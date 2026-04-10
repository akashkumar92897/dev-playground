#include <iostream>
#include <queue>
using namespace std;
int main (){
    priority_queue<int> q;
    q.push(200);
    q.push(10);
    q.emplace(3);
    q.emplace(4000);

    cout << q.top() << endl; //4000
    q.pop();
    cout << q.top() << endl; //200

    cout << q.size() << endl; // 3
    cout << q.empty() << endl; //0

    while (!q.empty()){
        cout << q.top() << " "; //200 10 3
        q.pop();
    }
    cout << endl;
    cout << q.size() << endl; //0
    return 0;
}