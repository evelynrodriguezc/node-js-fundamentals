cmd_Makefile := cd ..; /opt/homebrew/lib/node_modules/node-gyp/gyp/gyp_main.py -fmake --ignore-environment "-Dlibrary=shared_library" "-Dvisibility=default" "-Dnode_root_dir=/Users/evelynrodriguezcardona/Library/Caches/node-gyp/16.18.0" "-Dnode_gyp_dir=/opt/homebrew/lib/node_modules/node-gyp" "-Dnode_lib_file=/Users/evelynrodriguezcardona/Library/Caches/node-gyp/16.18.0/<(target_arch)/node.lib" "-Dmodule_root_dir=/Users/evelynrodriguezcardona/Documents/Projects/node-js-fundamentals/modules/natives" "-Dnode_engine=v8" "--depth=." "-Goutput_dir=." "--generator-output=build" -I/Users/evelynrodriguezcardona/Documents/Projects/node-js-fundamentals/modules/natives/build/config.gypi -I/opt/homebrew/lib/node_modules/node-gyp/addon.gypi -I/Users/evelynrodriguezcardona/Library/Caches/node-gyp/16.18.0/include/node/common.gypi "--toplevel-dir=." binding.gyp