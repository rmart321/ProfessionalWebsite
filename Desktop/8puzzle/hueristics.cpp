#include "hueristics.h"
#include <cmath>
#include <vector>

const std::vector<std::vector<int>> goalState = {{1, 2, 3}, {4, 5, 6}, {7, 8, 0}};

int misplacedT(const std::vector<std::vector<int>>& grid) {
    int missed = 0; // Misplaced tiles counter
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; m++) {
            if (grid[i][j] != 0 && grid[i][j] != goalState[i][j]) {
                missed++; // Increment counter for each misplaced tile
            }
        }
    }
    return missed;
}

int euclideanD(const std::vector<std::vector<int>>& grid) {
    int counter = 0;
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++) {
            if (puzzle[i][j] != 0) {
                int goal_i = (puzzle[i][j] - 1) / 3;
                int goal_j = (puzzle[i][j] - 1) % 3;
                counter += std::abs(i - goal_i) + std::abs(j - goal_j);
            }
        }
    }
    return counter;
}
