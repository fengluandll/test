﻿			var modulesSize = $(jsonResult.survey.Modules.Module).size();
		        for (modulescnt = 0; modulescnt < modulesSize; modulescnt++) {
		            moduleData = null;
		            if (modulesSize == 1) {
		                moduleData = jsonResult.survey.Modules.Module;
		            }
		            else {
		                moduleData = jsonResult.survey.Modules.Module[modulescnt];
		            }
		            ModuleText = moduleData.ModuleText[0].value;
		            ItemsCount = null;
		            ItemsData = null;
		            ItemsCount = $(moduleData.Items).size();
		            for (itemscnt = 0; itemscnt < ItemsCount; itemscnt++) {
		                if (ItemsCount == 1) {
		                    ItemsData = moduleData.Items;
		                }
		                else {
		                    ItemsData = moduleData.Items[itemscnt];
		                }
			   }
                          }