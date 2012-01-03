#!/usr/bin/env ruby

files_names = [
    'iwage.js',
    'iwage.modes.js',
    'iwage.tools.js',
    'iwage.history.js',
    'iwage.file.js',
    'iwage.view.js',
    'iwage.keybinding.js',
    'iwage.transition.js',

    'view/menu.js',
    'view/statusbar.js',
    'view/toolLauncher.js',

    'tools/Common.js',
    'tools/Static.js',

    'tools/Open.js',

    'modes/fabric/iwage.js',

    'modes/fabric/iwage.js',
    'modes/fabric/file.js',
    'modes/fabric/history.js',
    'modes/fabric/view.js',
    'modes/fabric/view/menu.js',

    'modes/fabric/tools/Common.js',
    'modes/fabric/tools/Static.js',
    'modes/fabric/tools/Open.js',
    'modes/fabric/tools/Text.js',
    'modes/fabric/tools/Image.js',
    'modes/fabric/tools/Svg.js',

    'modes/fabric/tools/EditImage.js',
    'modes/fabric/tools/ImageEditionReady.js',
    'modes/fabric/tools/Position.js',
    'modes/fabric/tools/Appearance.js',

    'modes/fabric/tools/Configuration.js',

    'modes/image/iwage.js',

    'modes/image/file.js',
    'modes/image/history.js',
    'modes/image/view.js',
    'modes/image/view/menu.js',

    'modes/image/vendor/glfx.js',
    'modes/image/vendor/jquery-ui-1.8.16.custom.min.js',

    'modes/image/tools/Static.js',
    'modes/image/tools/Open.js',
    'modes/image/tools/Save.js',
    'modes/image/tools/Zoom.js',
    'modes/image/tools/Crop.js',
    'modes/image/tools/FillAlpha.js',

    'modes/image/tools/RoundedCorners.js',
    'modes/image/tools/Reflect.js',
    'modes/image/tools/EditAsFabric.js',
    'modes/image/tools/FabricImageReady.js',

    'modes/image/tools/glfx/Common.js',
    'modes/image/tools/glfx/NubFilter.js',

    'modes/image/tools/glfx/BrightnessContrast.js',
    'modes/image/tools/glfx/Denoise.js',
    'modes/image/tools/glfx/EdgeWork.js',
    'modes/image/tools/glfx/HexagonalPixelate.js',
    'modes/image/tools/glfx/HueSaturation.js',
    'modes/image/tools/glfx/Ink.js',

    'modes/image/tools/glfx/LensBlur.js',
    'modes/image/tools/glfx/Noise.js',
    'modes/image/tools/glfx/Sepia.js',
    'modes/image/tools/glfx/TriangleBlur.js',
    'modes/image/tools/glfx/UnsharpMask.js',
    'modes/image/tools/glfx/Vibrance.js',

    'modes/image/tools/glfx/Vignette.js',
    'modes/image/tools/glfx/ColorHalftone.js',
    'modes/image/tools/glfx/DotScreen.js',
    'modes/image/tools/glfx/Swirl.js',
    'modes/image/tools/glfx/BulgePinch.js',
    'modes/image/tools/glfx/ZoomBlur.js',

    'modes/image/tools/glfx/TiltShift.js',
]

digested = ""

files_names.each do |file_name|
    path = "../src/js/#{file_name}"

    if File::exists? path
        content = IO.read path

        digested += content.strip
        digested += "\n"
        puts "Added #{path}"
    else
        puts "File not found #{path}"
    end
end

filename = '../dist/iwage.all.js'
File.open(filename, "w") { |file| file.write(digested.strip) }
puts "Created #{filename}"