# Generated by Django 3.0.5 on 2020-04-13 03:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('listings', '0002_auto_20200413_0313'),
    ]

    operations = [
        migrations.AlterField(
            model_name='listing',
            name='status',
            field=models.CharField(choices=[('NOT SENT', 'NOT SENT'), ('SENT', 'SENT'), ('DELIVERED', 'DELIVERED')], default='NOT SENT', max_length=10),
        ),
    ]
