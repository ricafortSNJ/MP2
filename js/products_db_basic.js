const products = [
    {
      "product_number": "001_cordless_drill_set",
      "product_name": "Cordless Drill Set",
      "product_brand": "Bosch"
    },
    {
      "product_number": "002_hammer",
      "product_name": "Hammer",
      "product_brand": "Stanley"
    },
    {
      "product_number": "003_screwdriver_set",
      "product_name": "Screwdriver Set",
      "product_brand": "Craftsman"
    },
    {
      "product_number": "004_oscillating_tool",
      "product_name": "Oscillating Tool",
      "product_brand": "Dremel"
    },
    {
      "product_number": "005_wrench_set",
      "product_name": "Wrench Set",
      "product_brand": "Kobalt"
    },
    {
      "product_number": "006_reciprocating_saw",
      "product_name": "Reciprocating Saw",
      "product_brand": "DeWalt"
    },
    {
      "product_number": "007_pry_bar_set",
      "product_name": "Pry Bar Set",
      "product_brand": "Estwing"
    },
    {
      "product_number": "008_socket_set",
      "product_name": "Socket Set",
      "product_brand": "Snap-On"
    },
    {
      "product_number": "009_pliers",
      "product_name": "Pliers",
      "product_brand": "Channellock"
    },
    {
      "product_number": "010_circular_saw",
      "product_name": "Circular Saw",
      "product_brand": "Makita"
    },
    {
      "product_number": "011_tape_measure",
      "product_name": "Tape Measure",
      "product_brand": "Stanley"
    },
    {
      "product_number": "012_hacksaw",
      "product_name": "Hacksaw",
      "product_brand": "Irwin"
    },
    {
      "product_number": "013_pipe_wrench",
      "product_name": "Pipe Wrench",
      "product_brand": "Ridgid"
    },
    {
      "product_number": "014_sledgehammer",
      "product_name": "Sledgehammer",
      "product_brand": "Fiskars"
    },
    {
      "product_number": "015_drill_bit_set",
      "product_name": "Drill Bit Set",
      "product_brand": "Milwaukee"
    },
    {
      "product_number": "016_jigsaw",
      "product_name": "Jigsaw",
      "product_brand": "Black & Decker"
    },
    {
      "product_number": "017_needle_nose_pliers",
      "product_name": "Needle Nose Pliers",
      "product_brand": "Klein Tools"
    },
    {
      "product_number": "018_chisel_set",
      "product_name": "Chisel Set",
      "product_brand": "WoodRiver"
    },
    {
      "product_number": "019_rotary_tool",
      "product_name": "Rotary Tool",
      "product_brand": "WEN"
    },
    {
      "product_number": "020_torx_driver_set",
      "product_name": "Torx Driver Set",
      "product_brand": "GearWrench"
    },
    {
      "product_number": "021_miter_saw",
      "product_name": "Miter Saw",
      "product_brand": "Delta"
    },
    {
    "product_number": "022_hole_saw_kit",
    "product_name": "Hole Saw Kit",
    "product_brand": "Lenox Tools"
    },
    {
    "product_number": "023_wire_stripper",
    "product_name": "Wire Stripper",
    "product_brand": "Greenlee"
    },
    {
    "product_number": "024_hand_saw",
    "product_name": "Hand Saw",
    "product_brand": "Bahco"
    },
    {
    "product_number": "025_multimeter",
    "product_name": "Multimeter",
    "product_brand": "Fluke"
    },
    {
    "product_number": "026_hex_key_set",
    "product_name": "Hex Key Set",
    "product_brand": "Bondhus"
    },
    {
    "product_number": "027_belt_sander",
    "product_name": "Belt Sander",
    "product_brand": "Porter-Cable"
    },
    {
    "product_number": "028_ratcheting_wrench_set",
    "product_name": "Ratcheting Wrench Set",
    "product_brand": "GearWrench"
    },
    {
    "product_number": "029_digital_caliper",
    "product_name": "Digital Caliper",
    "product_brand": "Mitutoyo"
    },
    {
    "product_number": "030_masonry_bit_set",
    "product_name": "Masonry Bit Set",
    "product_brand": "Bosch"
    },
    {
    "product_number": "031_air_compressor",
    "product_name": "Air Compressor",
    "product_brand": "California Air Tools"
    },
    {
    "product_number": "032_pneumatic_nailer",
    "product_name": "Pneumatic Nailer",
    "product_brand": "Hitachi"
    },
    {
    "product_number": "033_hedge_trimmer",
    "product_name": "Hedge Trimmer",
    "product_brand": "Greenworks"
    },
    {
    "product_number": "034_power_inverter",
    "product_name": "Power Inverter",
    "product_brand": "Cobra"
    },
    {
    "product_number": "035_metal_cutting_circular_saw",
    "product_name": "Metal Cutting Circular Saw",
    "product_brand": "Evolution"
    },
    {
      "product_number": "036_power_drill",
      "product_name": "Power Drill",
      "product_brand": "DeWalt"
    },
    {
      "product_number": "037_hammer_drill",
      "product_name": "Hammer Drill",
      "product_brand": "Makita"
    },
    {
      "product_number": "038_bench_grinder",
      "product_name": "Bench Grinder",
      "product_brand": "Jet"
    },
    {
      "product_number": "039_screwdriver_set",
      "product_name": "Screwdriver Set",
      "product_brand": "Klein Tools"
    },
    {
      "product_number": "040_toolbox",
      "product_name": "Toolbox",
      "product_brand": "Stanley"
    },
    {
      "product_number": "041_power_tool_combos",
      "product_name": "Power Tool Combos",
      "product_brand": "Ryobi"
    },
    {
      "product_number": "042_pipe_wrench",
      "product_name": "Pipe Wrench",
      "product_brand": "Ridgid"
    },
    {
      "product_number": "043_electricians_tool_set",
      "product_name": "Electrician's Tool Set",
      "product_brand": "Southwire"
    },
    {
      "product_number": "044_power_jigsaw",
      "product_name": "Power Jigsaw",
      "product_brand": "Bosch"
    },
    {
      "product_number": "045_drill_bit_set",
      "product_name": "Drill Bit Set",
      "product_brand": "DEWALT"
    },
    {
      "product_number": "046_air_impact_wrench",
      "product_name": "Air Impact Wrench",
      "product_brand": "Ingersoll Rand"
    },
    {
      "product_number": "047_digital_angle_finder",
      "product_name": "Digital Angle Finder",
      "product_brand": "GemRed"
    },
    {
      "product_number": "048_router_bit_set",
      "product_name": "Router Bit Set",
      "product_brand": "Freud"
    },
    {
      "product_number": "049_miter_saw",
      "product_name": "Miter Saw",
      "product_brand": "DeWalt"
    },
    {
      "product_number": "050_power_sander",
      "product_name": "Power Sander",
      "product_brand": "Black+Decker"
    },
    {
      "product_number": "051_tile_saw",
      "product_name": "Tile Saw",
      "product_brand": "Skil"
    },
    {
      "product_number": "052_circular_saw",
      "product_name": "Circular Saw",
      "product_brand": "Makita"
    },
    {
      "product_number": "053_chainsaw",
      "product_name": "Chainsaw",
      "product_brand": "Husqvarna"
    },
    {
      "product_number": "054_power_hammer",
      "product_name": "Power Hammer",
      "product_brand": "Bosch"
    },
    {
      "product_number": "055_belt_disc_sander",
      "product_name": "Belt Disc Sander",
      "product_brand": "Grizzly"
    },
];    
   