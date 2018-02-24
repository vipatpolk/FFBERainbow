package com.ffbe.RainbowCollector.controllers;


import com.fasterxml.jackson.databind.MappingIterator;
import com.fasterxml.jackson.dataformat.csv.CsvMapper;
import com.fasterxml.jackson.dataformat.csv.CsvSchema;
import org.springframework.core.io.ClassPathResource;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.File;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;


@RestController

public class unitController {

    @RequestMapping("/unitList")
    public List<Map<?, ?>> unitList() {
        List<Map<?, ?>> unitList = new ArrayList<>();
        File input = null;
        try {
            input = new ClassPathResource("static/data/units.csv").getFile();


            CsvSchema csv = CsvSchema.emptySchema().withHeader();
            CsvMapper csvMapper = new CsvMapper();
            MappingIterator<Map<?, ?>> mappingIterator = csvMapper.reader()
                    .forType(Map.class).with(csv).readValues(input);

            unitList = mappingIterator.readAll();

        } catch (Exception e) {
            e.printStackTrace();
        }


        return unitList;
    }


}
