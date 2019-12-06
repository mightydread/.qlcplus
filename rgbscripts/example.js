 /*
      Q Light Controller Plus
      fullcolumns.js

      Copyright (c) Heikki Junnila

      Licensed under the Apache License, Version 2.0 (the "License");
      you may not use this file except in compliance with the License.
      You may obtain a copy of the License at

          https://www.apache.org/licenses/LICENSE-2.0.txt

      Unless required by applicable law or agreed to in writing, software
      distributed under the License is distributed on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      See the License for the specific language governing permissions and
      limitations under the License.
    */

   
    
    /**
     * This algorithm produces fully-lit columns, meaning all pixels on a single
     * column are lit together.
     */
  
        var testAlgo = new Object;
        testAlgo.apiVersion = 1;
        testAlgo.name = "Full Columns";
        testAlgo.author = "Heikki Junnila";
        
        
        
        /**
         * The actual "algorithm" for this RGB script. Produces a map of
         * size($width, $height) each time it is called.
         *
         * @param step The step number that is requested (0 to (algo.rgbMapStepCount - 1))
         * @param rgb Tells the color requested by user in the UI.
         * @return A two-dimensional array[height][width].
         */
        testAlgo.rgbMap = function(width, height, rgb, step)
        {
            var map = new Array(height);
            for (var y = 0; y < height; y++)
            {
                map[y] = new Array();
                for (var x = 0; x < width; x++)
                {
                    if (Math.round(Math.random()))
                    map[y][x] = rgb;
                    else
                    map[y][x] = 0;
                }
            }
            
            return map;
        }
        
        /**
         * Tells RGB Matrix how many steps this testAlgorithm produces with size($width, $height)
         *
         * @param width The width of the map
         * @param height The height of the map
         * @return Number of steps required for a map of size($width, $height)
         */
        testAlgo.rgbMapStepCount = function(width, height)
        {
            // Each column is lit completely at a time, so because there are $width
            // columns in the map, the number of steps must be $width to light all
            // columns per round.
            return width * height;
        }
        
   
   
