require 'xcodeproj'
project_path = 'ios/Sabot.xcodeproj'
project = Xcodeproj::Project.open(project_path)
target = project.targets.first
group = project.main_group.find_subpath(File.join('Sabot'), true)
file_ref = group.new_reference('GoogleService-Info.plist')
target.add_file_references([file_ref])
project.save
