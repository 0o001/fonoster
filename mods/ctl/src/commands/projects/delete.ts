/*
 * Copyright (C) 2022 by Fonoster Inc (https://fonoster.com)
 * http://github.com/fonoster/fonoster
 *
 * This file is part of Fonoster
 *
 * Licensed under the MIT License (the "License");
 * you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 *
 *    https://opensource.org/licenses/MIT
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import Command from "../../base/delete";
const Projects = require("@fonoster/projects");
import { isDefaultProject, unsetDefaultProject } from "../../config";

export default class extends Command {
  static description = "delete a Fonoster Project";
  static args = [{ name: "ref" }];
  static aliases = ["projects:del", "projects:rm"];

  async run() {
    await super.deleteResource(new Projects(), "deleteProject");
    if (isDefaultProject(this.ref)) {
      unsetDefaultProject();
    }
  }
}
