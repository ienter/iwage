#!/usr/bin/env ruby

files_names = [
    [
        '../vendor/',
        [
            'keymaster/keymaster.min.js'
        ]
    ],
    [
        '../src/js/ext_components/',
        [
            'Ext.ux.colorpicker.ColorPicker.js',
            'Ext.ux.colorpicker.ColorPickerField.js',
            'Ext.ux.cufonpicker.CufonPickerField.js',
            'Ext.ux.imagepicker.ImagePickerField.js',
            'Ext.ux.imagepicker.ImagePickerPanel.js'
        ]
    ],
    [
        '../src/js/',
        [
            # Base
            'iwage.js',
            'modes.js',
            'event.js',
            'tools.js',
            'history.js',
            'file.js',
            'view.js',
            'keybinding.js',
            'transition.js',
            'i18n.js',

            'view/menu.js',
            'view/statusbar.js',
            'view/toolLauncher.js',

            'tools/Common.js',
            'tools/Static.js',

            'tools/Open.js',

            'modes/fabric/vendor/fabric.all.js',

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
    ]
]

digested = ''

count = 0
error = 0
files_names.each do |data|
    path = data[0]
    data[1].each do |filename|
        filepath = "#{path}#{filename}"
        count += 1

        if File::exists? filepath
            content = IO.read filepath

            digested += content.strip
            digested += "\n"
        else
            error += 1
            puts "File not found #{filepath}"
        end
    end
end

filename = '../dist/iwage.all.js'
File.open(filename, "w") { |file| file.write(digested.strip) }

added = count - error

puts "Added #{added}/#{count} files"
puts "Created #{filename}"