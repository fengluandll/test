#include <iostream>
#include <complex>

using namespace std;


int main() {
	double x = 2.1;
	constexpr double y = 2.2;
	complex<double> w = 1;
	cout << w;
	constexpr double z = y*y;
}